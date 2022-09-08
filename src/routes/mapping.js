import { Route } from 'react-router-dom'
import { Routings } from './routes'

export const maps = () => Routings.map(({ element, path }) => (<Route element={ element } path={ path } />))