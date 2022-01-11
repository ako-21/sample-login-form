import $ from 'jquery'

export const onSignIn = credentials => {
  return $.ajax({
    url: 'https://reqres.in/api/login',
    method: 'POST',
    data: {
      email: credentials.email,
      password: credentials.password
    }
  })
}