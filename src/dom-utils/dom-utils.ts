// Event Listener Tutorial: https://youtu.be/XF1_MlZ5l6M
// Event Listener Article: https://blog.webdevsimplified.com/202...

document.addEventListener;

type DocEventType = keyof DocumentEventMap;

export function addGlobalEventListener(
  type: DocEventType,
  selector: string,
  callback: (evt: Event) => void,
  options?: boolean | AddEventListenerOptions | undefined,
  parent: Document | Element = document
) {
  parent.addEventListener(
    type,
    (e) => {
      const elem = qs(selector);
      if (elem && elem.contains(e.target as Node)) {
        callback(e);
      }
      // if (e.target.matches(selector)) callback(e);
    },
    options
  );
}

export function qs(selector: string, parent = document) {
  const parentNode = parent.querySelector(selector);
  if (parentNode == null) return undefined;
  return parentNode;
}

export function qsa(selector: string, parent: Document | Element = document) {
  return [...parent.querySelectorAll(selector)];
}

export function createElement(
  type: string,
  options: Record<string, any> | undefined = {}
) {
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value);
      return;
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue as string;
      });
    }

    if (key === "text") {
      element.textContent = value;
      return;
    }

    element.setAttribute(key, value);
  });

  return element;
}

export function betterCreateElement(
  tag: keyof HTMLElementTagNameMap,
  options?: any
) {
  return Object.assign(document.createElement(tag), options);
}
