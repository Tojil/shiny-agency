import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'

import Freelances from './index'

const server = setupServer(
  // on precise ici l'url qu'il faudra intercepter
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
    return res(ctx.json({}))
  })
)

// Active la simulation d'API avnt les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos test avabt chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())
