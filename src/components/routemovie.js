import React,{component} from 'react'
import { Route ,Switch } from 'react-router-dom'
import App from '../App'
import Rate from './Rate'
import search from './search'
import Trailer from './trailer'
import {moviesData} from './data'

export default function routemovie() {
    return (
        <div>
             <Switch>
             <Route exact path="/" component={App}/>
                 <Route exact path="/Rate" component={Rate}/>
                 <Route exact path="/search" component={search}/>
                <Route exact path={`/:name` } render={(props)=><Trailer data={moviesData} {...props}/>}/>
             </Switch>
            
        </div>
    )
}
