import { useRoutes } from 'react-router-dom'
import ExpandingCard from './views/01-ExpandingCard'
import Test from './views/00-test'
import ProgressSteps from './views/02-progress-steps'
import RotatingNavAnimation from './views/03-rotating-nav-animation'
import HiddenSearchWidget from './views/04-hidden-search-widget'
import BlurryLoading from './views/05-blurry-loading'
import ScrollAnimation from './views/06-scroll-animation'
import SplitLandingPage from './views/07-split-landing-page'
import FormInputWave from './views/08-form-input-wave'

function App() {
  let element = useRoutes([
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/01-expanding-card',
      element: <ExpandingCard />,
    },
    {
      path: '/02-progress-steps',
      element: <ProgressSteps />,
    },
    {
      path: '/03-rotating-nav-animation',
      element: <RotatingNavAnimation />,
    },
    {
      path: '/04-hidden-search-widget',
      element: <HiddenSearchWidget />,
    },
    {
      path: '/05-blurry-loading',
      element: <BlurryLoading />,
    },
    {
      path: '/06-scroll-animation',
      element: <ScrollAnimation />,
    },
    {
      path: '07-split-landing-page',
      element: <SplitLandingPage />,
    },
    {
      path: '08-form-input-wave',
      element: <FormInputWave />,
    },
  ])

  return element
}

export default App
