const express = require('express');

const testnameactions = require('../data/helpers/actionModel.js');
const testname = require('../data/helpers/projectModel');


const server = express();

server.use(express.json());

server.delete('/:id', (req, res) => {
    testname.remove(req.params.id)
    .then(testname => {
        res.status(200).json(testname);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error Deleting the Testname',
        });
      });
})

server.get('/:id', (req, res) => {
    testname.get(req.params.id)
    .then(testname => {
        res.status(200).json(testname);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error finding the Testname',
        });
      });
})

server.get('/:id/projectactions', (req, res) => {
    testname.getProjectActions(req.params.id)
    .then(testname => {
        res.status(200).json(testname);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error finding the project actions',
        });
      });
})

// server.get('/:id/projectactions', (req, res) => {
//     const { id } = req.params
//     testname.getProjectActions(req.params.id)
//     .then(testnames => {
//         res.status(200).json(testnames);
//     })
//     .catch(error => {
//         console.log(error);
//         res.status(500).json({
//           message: 'Error finding the project actions',
//         });
//       });
// })

server.put('/:id', (req, res) => {
    testname.update(req.params.id, req.body)
    .then(testnames => {
        res.status(201).json(testnames);
    })
    .catch (error => {
        console.error('\nERROR', error);
        res.status(500).json({ error: 'Cannont post the testname' });
      });
})


server.get('/:id/projectactions', (req, res) => {
  testnameactions.get(req.params.id, req.body)
    .then(testnameaction => {
        res.status(200).json(testnameaction);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error finding the project actions',
        });
      });
})

server.post('/', (req, res) => {
    testname.insert(req.body)
    .then(testnames => {
        res.status(201).json(testnames);
    })
    .catch (error => {
        console.error('\nERROR', error);
        res.status(500).json({ error: 'Cannont post the testname' });
      });
})


server.post('/:id/projectactions', (req, res) => {
  // const { action } = req.body;
  testnameactions.insert(req.body)
    .then(testnameaction => {
        res.status(200).json(testnameaction);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error finding the project actions in testnameactions',
        });
      });
})

server.get('/', (req, res) => {
    testname.get()
    .then(testnames => {
        res.status(200).json({testnames})
    })
    .catch (error => {
        console.error('\nERROR', error);
        res.status(500).json({ error: 'Cannot retrieve the testnames' });
      });
})

module.exports = server;
