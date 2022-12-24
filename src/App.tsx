import { useRoutes } from 'react-router-dom'
import ExpandingCard from './views/01-ExpandingCard'
import Test from './views/00-test'
import ProgressSteps from './views/02-progress-steps'
import RotatingNavAnimation from './views/03-rotating-nav-animation'
import HiddenSearchWidget from './views/04-hidden-search-widget'

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
  ])

  return element
}

export default App
