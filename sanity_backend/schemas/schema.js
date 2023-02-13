import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import abouts from './abouts'
import works from './works'
import skills from './skills'
import contact from './contact'



export default createSchema({

  name: 'default',
  types: schemaTypes.concat([

    abouts,
    works,
    skills,
    contact

  ]),
})
