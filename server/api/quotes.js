const router = require('express').Router()
const { Quote } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
    // req.body {tags: [], synonyms: [], category: ''}
    console.log('iam the REQ.BODY', req.body)
    req.body.forEach( str => {
        return Quote.findAll({
            where: {
                $or: [
                    {
                        body:
                        {
                            $contains: [str]
                        }
                    },
                    {
                        category:
                        {
                            $contains: [str]
                        }
                    },
                    {
                        tags:
                        {
                            $contains: [str]
                        }
                    },
                    {
                        author:
                        {
                            $contains: [str]
                        }
                    }
                ]
            }
        })
        .then(quotes => res.json(quotes))
        .catch(next)
    })
})

router.get('/:id', (req, res, next) => {
    Quote.findById(req.params.id)
    .then(quote => res.json(quote))
    .catch(next)
})

router.post('/', (req, res, next) => {
    Quote.create(req.body)
    .then(quote => res.status(201).json(quote))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Quote.findById(req.params.id)
    .then(quote => quote.update(req.body))
    .then(updatedQuote => {console.log('i am the response body', updatedQuote)
        res.json(updatedQuote)})
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Quote.findById(req.params.id)
    .then(quote => quote.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
})

