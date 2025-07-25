export default defineAppConfig({
  icon: {
    customize: (content: string, _name: string, _prefix: string, _provider: string) => {
      return content.replace(/fill="[^"]*"/g, `fill="currentColor"`)
    },
  },
})
