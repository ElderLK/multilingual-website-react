import React from 'react'

// Import context and provider
import { MyContext } from '../../context'

// Import translations
import * as translationCZ from '../translations/cz'
import * as translationDE from '../translations/de'
import * as translationEN from '../translations/en'
import * as translationFR from '../translations/fr'
import * as translationPT_BR from '../translations/pt-BR'

const Home = () => {
  return (
    <MyContext.Consumer>
        {(context) => (
          <div className="page page-absolute page-home">
            {
              (() => {
                if (context.state.language === 'cz') {
                  return <div className="page-header">
                    <h1 className="page-heading-h1">{translationCZ.home.h1}</h1>

                    <h2 className="page-heading-h2">{translationCZ.home.h2}</h2>
                  </div>
                } else if (context.state.language === 'de') {
                  return <div className="page-header">
                    <h1 className="page-heading-h1">{translationDE.home.h1}</h1>

                    <h2 className="page-heading-h2">{translationDE.home.h2}</h2>
                  </div>
                } else if (context.state.language === 'pt-BR' || context.state.language === 'pt') {
                  return <div>
                    <h1 className="page-heading-h2">{translationPT_BR.about.h1}</h1>

                    <p className="page-text">{translationPT_BR.about.p}</p>
                  </div>
                } else if (context.state.language === 'fr') {
                  return <div className="page-header">
                    <h1 className="page-heading-h1">{translationFR.home.h1}</h1>

                    <h2 className="page-heading-h2">{translationFR.home.h2}</h2>
                  </div>
                } else {
                  return <div className="page-header">
                    <h1 className="page-heading-h1">{translationEN.home.h1}</h1>

                    <h2 className="page-heading-h2">{translationEN.home.h2}</h2>
                  </div>
                }
              })()
            }
          </div>
        )}
    </MyContext.Consumer>
  )
}

export default Home