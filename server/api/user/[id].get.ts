export default defineEventHandler((event) => {
  // event.context.params.slug to get the route segment: 'bar/baz'
  return {
    ...event.context.params,
  }
})
