import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { App } from '../app'

describe('Home page test', () => {
  it('Should view on document Hello World', () => {
    const { getByText } = render(<App />)

    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
