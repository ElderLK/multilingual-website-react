import React from 'react'

// Import context and provider
import { MyContext } from '../../context'

// Import translations
import * as translationCZ from '../translations/cz'
import * as translationDE from '../translations/de'
import * as translationEN from '../translations/en'
import * as translationFR from '../translations/fr'
import * as translationPT_BR from '../translations/pt-BR'

const Portfolio = () => {
  return (
    <div className="page page-portfolio page-static">
      <div className="container">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              {
                (() => {
                  if (context.state.language === 'cz') {
                    return <div>
                      <h1 className="page-heading-h2">{translationCZ.portfolio.h1}</h1>

                      <h2 className="page-text">{translationCZ.portfolio.h2}</h2>
                    </div>
                  } else if (context.state.language === 'de') {
                    return <div>
                      <h1 className="page-heading-h2">{translationDE.portfolio.h1}</h1>

                      <h2 className="page-text">{translationDE.portfolio.h2}</h2>
                    </div>
                  } else if (context.state.language === 'pt-BR' || context.state.language === 'pt') {
                    return <div>
                      <h1 className="page-heading-h2">{translationPT_BR.about.h1}</h1>
  
                      <p className="page-text">{translationPT_BR.about.p}</p>
                    </div>
                  } else if (context.state.language === 'fr') {
                    return <div>
                      <h1 className="page-heading-h2">{translationFR.portfolio.h1}</h1>

                      <h2 className="page-text">{translationFR.portfolio.h2}</h2>
                    </div>
                  } else {
                    return <div>
                      <h1 className="page-heading-h2">{translationEN.portfolio.h1}</h1>

                      <h2 className="page-text">{translationEN.portfolio.h2}</h2>
                    </div>
                  }
                })()
              }
            </React.Fragment>
          )}
        </MyContext.Consumer>

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a  href=" ">
              <img
                src="https://source.unsplash.com/HKhdAsLYiQc/800x800"
                srcSet="https://source.unsplash.com/HKhdAsLYiQc/800x800 1x, https://source.unsplash.com/HKhdAsLYiQc/1600x1600 2x"
                alt="Concrete building in Shinjuku-ku, Japan by Dmitri Popov"
              />
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a  href=" ">
              <img
                src="https://source.unsplash.com/jTCLppdwSEc/800x800"
                srcSet="https://source.unsplash.com/jTCLppdwSEc/800x800 1x, https://source.unsplash.com/jTCLppdwSEc/1600x1600 2x"
                alt="Modern apartment building in Berlin, Germany by Grant Lemons"
              />
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a  href=" ">
              <img
                src="https://source.unsplash.com/fYO1T495QCM/800x800"
                srcSet="https://source.unsplash.com/fYO1T495QCM/800x800 1x, https://source.unsplash.com/fYO1T495QCM/1600x1600 2x"
                alt="Building in Chicago, United States by Christian Perner"
              />
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a  href=" ">
              <img
                src="https://source.unsplash.com/w7YCquMkv2c/800x800"
                srcSet="https://source.unsplash.com/w7YCquMkv2c/800x800 1x, https://source.unsplash.com/w7YCquMkv2c/1600x1600 2x"
                alt="Petersen Automotive Museum in Los Angeles, United States by Denys Nevozhai"
              />
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a  href=" ">
              <img
                src="https://source.unsplash.com/mQiZnKwGXW0/800x800"
                srcSet="https://source.unsplash.com/mQiZnKwGXW0/800x800 1x, https://source.unsplash.com/mQiZnKwGXW0/1600x1600 2x"
                alt="Building in Los Angeles, United States by Kimon Maritz"
              />
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a  href=" ">
              <img
                src="https://source.unsplash.com/s_JSq-i4m8A/800x800"
                srcSet="https://source.unsplash.com/s_JSq-i4m8A/800x800 1x, https://source.unsplash.com/s_JSq-i4m8A/1600x1600 2x"
                alt="Akron Art Museum in Akron, United States by Lance Anderson"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio