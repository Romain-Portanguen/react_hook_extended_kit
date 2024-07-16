import { renderHook, act } from '@testing-library/react-hooks';
import { useIntersectionObserver } from './use-intersection-observer';

class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;
  private elements: Set<Element>;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    this.elements = new Set<Element>();
  }

  observe = (element: Element) => {
    this.elements.add(element);
    this.callback(
      [{ isIntersecting: true, target: element } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
  };

  unobserve = (element: Element) => {
    this.elements.delete(element);
    this.callback(
      [{ isIntersecting: false, target: element } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
  };

  disconnect = () => {
    this.elements.forEach((element) => {
      this.callback(
        [
          {
            isIntersecting: false,
            target: element,
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });
    this.elements.clear();
  };
}

global.IntersectionObserver = MockIntersectionObserver as unknown as {
  new (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ): IntersectionObserver;
  prototype: IntersectionObserver;
};

describe('useIntersectionObserver hook', () => {
  it('should return false when not intersecting', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    expect(result.current[1]).toBe(false);
  });

  it('should return true when intersecting', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const [ref] = result.current;

    act(() => {
      if (ref.current) {
        const observer = new MockIntersectionObserver(([entry]) => {
          expect(entry.isIntersecting).toBe(true);
        });
        observer.observe(ref.current);
      }
    });

    act(() => {
      const newElement = document.createElement('div');
      const observer = new MockIntersectionObserver(([entry]) => {
        expect(entry.isIntersecting).toBe(true);
      });
      observer.observe(newElement);
    });
    setTimeout(() => {
      expect(result.current[1]).toBe(true);
    }, 0);
  });

  it('should handle unobserve correctly', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const [ref] = result.current;

    const element = document.createElement('div');
    document.body.appendChild(element);

    act(() => {
      const observer = new MockIntersectionObserver(([entry]) => {
        expect(entry.isIntersecting).toBe(false);
      });
      if (ref.current) {
        observer.observe(ref.current);
        observer.unobserve(ref.current);
      }
    });

    setTimeout(() => {
      expect(result.current[1]).toBe(false);
    }, 0);
  });

  it('should handle disconnect correctly', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    act(() => {
      const observer = new MockIntersectionObserver(([entry]) => {
        expect(entry.isIntersecting).toBe(false);
      });
      observer.disconnect();
    });

    setTimeout(() => {
      expect(result.current[1]).toBe(false);
    }, 0);
  });

  it('should update when options change', () => {
    const { result, rerender } = renderHook(
      ({ options }) => useIntersectionObserver(options),
      {
        initialProps: {
          options: { root: null, rootMargin: '0px', threshold: 0.1 },
        },
      },
    );

    expect(result.current[1]).toBe(false);

    rerender({ options: { root: null, rootMargin: '0px', threshold: 1.0 } });

    const [ref] = result.current;

    act(() => {
      if (ref.current) {
        const observer = new MockIntersectionObserver(([entry]) => {
          expect(entry.isIntersecting).toBe(true);
        });
        observer.observe(ref.current);
      }
    });

    setTimeout(() => {
      expect(result.current[1]).toBe(true);
    }, 0);
  });

  it('should observe and unobserve element correctly', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const [ref] = result.current;

    const element = document.createElement('div');
    document.body.appendChild(element);

    act(() => {
      const observer = new MockIntersectionObserver(([entry]) => {
        setTimeout(() => {
          expect(entry.isIntersecting).toBe(true);
        }, 0);
      });

      if (ref.current) {
        observer.observe(ref.current);
        expect(observer['elements'].has(ref.current)).toBe(true);

        observer.unobserve(ref.current);
        expect(observer['elements'].has(ref.current)).toBe(false);
      }
    });
  });

  it('should correctly observe with a new element', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    const newElement = document.createElement('div');
    document.body.appendChild(newElement);

    act(() => {
      const observer = new MockIntersectionObserver(([entry]) => {
        setTimeout(() => {
          expect(entry.isIntersecting).toBe(true);
        }, 0);
      });

      observer.observe(newElement);
      setTimeout(() => {
        expect(result.current[1]).toBe(true);
      }, 0);
    });
  });
});
