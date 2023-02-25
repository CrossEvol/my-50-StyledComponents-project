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
import SoundBoard from './views/09-sound-board'
import DadJokes from './views/10-dad-jokes'
import EventKeyCodes from './views/11-event-keyCodes'
import FaqCollapse from './views/12-faq-collapse'
import RandomChoicePicker from './views/13-random-choice-picker'
import AnimatedNavigation from './views/14-animated-navigation'
import IncrementingCounter from './views/15-incrementing-counter'
import DrinkWater from './views/16-drink-water'
import MovieApp from './views/17-movie-app'
import BackgroundSlider from './views/18-background-slider'
import ThemeClock from './views/19-theme-clock'
import ButtonRippleEffect from './views/20-button-ripple-effect'
import DragAndDrop from './views/21-drag-and-drop'
import DrawingApp from './views/22-drawing-app'
import KineticLoader from './views/23-kinetic-loader'
import ContentPlaceholder from './views/24-content-placeholder'

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
    {
      path: '09-sound-board',
      element: <SoundBoard />,
    },
    {
      path: '10-dad-jokes',
      element: <DadJokes />,
    },
    {
      path: '11-event-keyCodes',
      element: <EventKeyCodes />,
    },
    {
      path: '12-faq-collapse',
      element: <FaqCollapse />,
    },
    {
      path: '13-random-choice-picker',
      element: <RandomChoicePicker />,
    },
    {
      path: '14-animated-navigation',
      element: <AnimatedNavigation />,
    },
    {
      path: '15-incrementing-counter',
      element: <IncrementingCounter />,
    },
    {
      path: '16-drink-water',
      element: <DrinkWater />,
    },
    {
      path: '17-movie-app',
      element: <MovieApp />,
    },
    {
      path: '18-background-slider',
      element: <BackgroundSlider />,
    },
    {
      path: '19-theme-clock',
      element: <ThemeClock />,
    },
    {
      path: '20-button-ripple-effect',
      element: <ButtonRippleEffect />,
    },
    {
      path: '21-drag-and-drop',
      element: <DragAndDrop />,
    },
    {
      path: '22-drawing-app',
      element: <DrawingApp />,
    },
    {
      path: '22-drawing-app',
      element: <DrawingApp />,
    },
    {
      path: '23-kinetic-loader',
      element: <KineticLoader />,
    },
    {
      path: '24-content-placeholder',
      element: <ContentPlaceholder />,
    },
  ])

  return element
}

export default App
