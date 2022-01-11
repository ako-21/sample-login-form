import React from 'react'
import { fireEvent, render, waitFor } from "@testing-library/react"
import SignIn from './SignIn'


describe('SignIn', () => {
  describe('submits valid values', () => {
    it('enables submit button', async () => {
      const { getByTestId } = render(<SignIn />)
      const email = getByTestId('email')
      const password = getByTestId('password')
      const button = getByTestId('submit-button')

      await waitFor(() => {
        fireEvent.change(email, {target: {value: 'test@test.com'}})
      })

      await waitFor(() => {
        fireEvent.change(password, {target: {value: '1'}})
      })

      expect(button).not.toBeDisabled()
    })
  })
  describe('invalid values', () => {
    it('does not enable submit button', async () => {
      const { getByTestId } = render(<SignIn />)
      const email = getByTestId('email')
      const password = getByTestId('password')
      const button = getByTestId('submit-button')

      await waitFor(() => {
        fireEvent.change(email, {target: {value: 'khkhkh'}})
      })

      await waitFor(() => {
        fireEvent.change(password, {target: {value: ''}})
      })

      expect(button).toBeDisabled()
    })
  })
})