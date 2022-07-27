import Card from './index'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    const cardPicture = screen.getAllByRole('img')
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardPicture.src).toBe('http://loalhost/myPicture.png')
    expect(cardTitle.textContent).toBe(' Harry Potter ')
  })
  test('Should add ⭐️ around title', async () => {
    render(
      <ThemeProvider>
        <Card
          title={'Harry Potter'}
          label="Magicien frontend"
          picture={'myPicture'}
        />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Harry/i)
    const parentNode = cardTitle.closest('div')
    fireEvent.click(parentNode)
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})
