export const useScrollTo = (event: any) => {
  /* 
      Function use to scroll when click on div
      On click: scroll to the target section
      Can't select an anchor because I want a smooth scrolling
      So on click use window.scroll to scroll one by one section
      Because of the observer in App.tsx we need to scroll multiple times to go down to multiple section
      So if sites or contact are clicked, we scroll 2 or 3 time
      The first scroll doesn't have delay, but for all next add 550ms each time to avoid scroll freezing on unwanted section
    */

  const targetId = event.target.id.slice(0, event.target.id.search('-'))
  const target = document.getElementById(targetId)
  const rect = target?.getBoundingClientRect()
  
  target?.scrollIntoView({ block: 'start'})
/*   if (
    targetId === 'home' ||
    targetId === 'more' ||
    targetId === 'sites' ||
    targetId === 'contact'
  ) {
    setTimeout(() => {
      if (rect?.top) {
        window.scroll({ top: rect?.top, behavior: 'smooth' })
      }
    }, 750)
  }
  if (targetId === 'sites' || targetId === 'contact') {
    setTimeout(() => {
      if (rect?.top) {
        window.scroll({ top: rect?.top, behavior: 'smooth' })
      }
    }, 450)
  }
  if (targetId === 'sites' || targetId === 'contact') {
    setTimeout(() => {
      if (rect?.top) {
        window.scroll({ top: rect?.top * 2, behavior: 'smooth' })
      }
    }, 1000)
    setTimeout(() => {
      if (rect?.top) {
        window.scroll({ top: rect?.top * 2, behavior: 'smooth' })
      }
    }, 1500)
  }
 */}
