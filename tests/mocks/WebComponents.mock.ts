declare var global: any;
class WebComponentsMock {}
class MutationObserverMock {
  observe() {};
}
global.WebComponents = WebComponentsMock;
global.MutationObserver = MutationObserverMock;