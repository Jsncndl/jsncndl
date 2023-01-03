export const Home = () => {

  const toggleOnClick = (event: any) => {
    /* 
      Function use to scroll when click on div
      On click: scroll to the target section
      Can't select an anchor because I want a smooth scrolling
      So on click use window.scroll to scroll one by one section
      Because of the observer in App.tsx we need to scroll multiple times to go down to multiple section
      So if sites or contact are clicked, we scroll 2 or 3 time
      The first scroll doesn't have delay, but for all next add 550ms each time to avoid scroll freezing on unwanted section
    */

    const targetId = event.target.id.slice(event.target.id.search('-') + 1)
    const target = document.getElementById(targetId)
    const rect = target?.getBoundingClientRect()
    window.scroll({ top: rect?.top, behavior: 'smooth' })
    if (targetId === 'contact' || targetId === 'sites') {
      setTimeout(() => {
        if (rect?.top) {
          window.scroll({ top: rect?.top, behavior: 'smooth' })
        }
      }, 550)
    }
    if (targetId === 'contact') {
      setTimeout(() => {
        if (rect?.top) {
          console.log(rect?.top * 2)
          window.scroll({ top: rect?.top * 2, behavior: 'smooth' })
        }
      }, 1100)
    }
  }

  return (
    <span>
      {/* <FadeInX duration='1s'> */}
      <h1>Bienvenue sur le site de Josian Candel</h1>
      <div>
        Développeur web à la recherche d'une alternance pour effectuer la formation Développeur
        d'Application JavaScript React avec l'organisme OpenClassrooms
      </div>
      <div id='button-more' onClick={toggleOnClick}>
        En savoir plus sur mon parcours ...
      </div>
      <div id='button-sites' onClick={toggleOnClick}>
        Voir mes réalisations
      </div>
      <div id='button-contact' onClick={toggleOnClick}>
        Me contacter
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae. Molestie ac
        feugiat sed lectus vestibulum mattis. Pellentesque elit ullamcorper dignissim cras tincidunt
        lobortis feugiat. Nam aliquam sem et tortor consequat. Sapien et ligula ullamcorper
        malesuada proin libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Non
        enim praesent elementum facilisis leo vel fringilla est. Pellentesque habitant morbi
        tristique senectus et netus. Aliquam vestibulum morbi blandit cursus risus at ultrices.
        Viverra suspendisse potenti nullam ac tortor vitae purus. Ullamcorper malesuada proin libero
        nunc consequat interdum varius. Velit sed ullamcorper morbi tincidunt ornare massa eget
        egestas purus.
      </div>
      {/* </FadeInX> */}
    </span>
  )
}
