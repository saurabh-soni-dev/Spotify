import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();
const isReady = navigationRef.isReady();

async function navigate(routeName: string, params?: object) {
  if (isReady) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}
async function replace(routeName: string, params?: object) {
  if (isReady) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
}
async function resetAndNavigate(routeName: string, params?: object) {
  if (isReady) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName}],
      }),
    );
  }
}
async function goBack() {
  if (isReady) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}
async function push(routeName: string, params?: object) {
  if (isReady) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}

export {navigationRef, navigate, replace, resetAndNavigate, goBack, push};
