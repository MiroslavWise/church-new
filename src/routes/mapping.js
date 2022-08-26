import { Route } from 'react-router-dom'
import {Routings} from './routes'

const maps = () => Routings.map(({element, path})=>(<Route {...{element, path}}/>))

export {maps}