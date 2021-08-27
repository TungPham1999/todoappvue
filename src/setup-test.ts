import 'jest'

jest.mock('src/config', () => ({
  CONFIG: {
    API_HOST: '',
  },
}))

// eslint-disable-next-line @typescript-eslint/no-empty-function
global.fetch = jest.fn().mockImplementation(() => new Promise(() => {}))

afterEach(() => {
  jest.clearAllMocks()
})
