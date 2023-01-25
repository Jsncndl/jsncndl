import styled from 'styled-components'
import { useScrollTo } from '../../utils/hooks/useScrollTo'
import backgroundWave from '../../images/svg/wave.svg'
import { colors } from '../../styles/colors'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const SitesLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SitesLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const Home = () => {
  return (
    <span
      style={{
        position: 'absolute',
        height: '97vh',
        width: '100%',
        backgroundColor: `${colors.first}`,
        backgroundImage: `url(${backgroundWave})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '100%',
        backgroundPositionY: '100%',
        backgroundSize: 'contain',
      }}>
      <h1>Bienvenue sur le site de Josian Candel</h1>
      <div>
        Développeur web à la recherche d'une alternance pour effectuer la formation Développeur
        d'Application JavaScript React avec l'organisme OpenClassrooms
      </div>
      <StyledContainer>
        <SitesLink id='more-button' onClick={useScrollTo}>
          <SitesLogo
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlElEQVR4nO2XS08TURiGuzDxR9SVCl5TIYhoUOslKKRRQFya6R8wRn+BLDq4MlAqVxFFQYTKgkShZUoLvXCzBVwyxY1G3IjphdKZaaefOaXTnpo2dEJHhzhv8qSbrzPPe87MJEelUqJEyT8PfG48BCtNZvDdCfG+xhDvrR+DZV2Jar/I876GzYSvARLeeuC9t4H/dAtiS7pNmNOpVXIP7603C9LxJR3EF+sgtnATuPka4DzXRop6M71hrYwgaV5P+iE3tEvsNeNLulCW9Nx1YD1XgXFpIeqsDhS1QLIE6W/OX8APYq/HzdUEBWnWrQXGdQmis9WwPXMetu2VxS+wWwmx12Ld2rGktLMaojMXYNtxDiLTFbBlK4Pw1GmzNAWerFcQJB0tRgHGWVm67aj6GbGfhS1bOWxRGghbT0Fo4thmwHLkaNHl77WsVREGOlCsHUCJ2M6oQ9aTIyHL8WDwY0kw8OGwOTAugTxaeb2B/oULEwY/s9cCfyW55ekA2hH8nVDtN3mVMEP6m9EnVsx1jRNwsG2CedRqiW60TUYTRgsDRisDRks00W5lvpumuIdoRnJ5IQT5RVPodZ/aImqTlVk1TTHQbkWwYEJMsfAsRSfFQZeNW+myRdSSy4sJWtUOilntpDKyiA4EhcR36KI4eG7noG86tiJ6J6SSR+mhuAfdNg56prm07I4wi1YcujFezsSSvHJw92Uhj9JrZxf70MraY1myqBCiF+P1bBzeOOPod77gGxAG+odU8ij9di6cXNWZWJYselwEUDnEkIuHtwh3PFzwDfQkPSCVPApaVWFl+zDZF44M/SlGPHySUQ9f+Cda+9hxIFVio9jyKLByFwT6MVnheRd2B4HPquSSpNByEySWG9OiiIHZeBphl/BZSaUIkvYUekZI+BoBncB4b31aVHikBAZT4LOSFhBzRsBPYIOY7JBLIPXiunjAZ2VTYOfoWAux+RtpUcSwO8O7FPisbArEsKPjMCYrfHGEr86oJwH4rGwKsO4rwLguA+O8mJGdS4AZ430KfFY2BTLHx8q8/xHAZ/cs2TrJeNosDORCTIGIvZKNTJdDmNJkHYZygc/uuUA+ebEFwpSGDFtOhIOTpYbdCuCzsimAR79LgT1LKwVIZQfEZXwBPOOLALnYF+/AeB55pUCe6JUd+CPKI0T+by+xwf8t3/8Ikv4q+wKEYb0uVwkkr2/x14ouoESJEtW+ym+TFSFEEsvDywAAAABJRU5ErkJggg=='
            alt='Logo de la partie en savoir plus'
          />
          <p>En savoir plus sur mon parcours ...</p>
        </SitesLink>
        <SitesLink id='sites-button' onClick={useScrollTo}>
          <SitesLogo
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYklEQVR4nO2ZeYhXVRTHf/ZrnEbHGSsXVLRSyT+0BTfEHdwQbDAlMRVxCkbJNKFIEUH8Q1xBRQQR3EArnUlaoEVTRHErUsGlzdIILKX6o3DU0D5y4PuT6+Pd93sz896A8L5wYX73nXvP+d7lnHPP5HIZMmTIkCHDQwygBbAXOACU5B5WAG2AeuA28GRzKZ0G1ARWcz1wClgJdG3AXAOBWmAI0Ad4wflWY7rS4FBQMAIY5/wez4P4B3jTCEbM8SiwBrirMbYbO4EBjsw405UGgYlAD63iMKffDArDLqA0ZJ5yYL9nzFpHbph0mc6JSRLZCIwEXgcWOP1b8OMI8LgjWwmciJDf6sgukC7TubGpxtv57w7kgS5azSeAdo7MpgjDCmTsDswEzhSRXenM2066yqU7L1taNIZIKynoAJwEpgIrgM2OzDseo77Waj5iDkDNFmZsBKH5zrybpWuqdJsNhlZN2p0IshNCDHrf7odIXnP6fwcWAa2BupBxE9Iysgz42Xw7sC9MEdAWuOMYc1YkPow4Qh+LzAWn7657nwILtU82mC1luYZC53I00NJcI9DRI/eNY9BLwBsUxzxgkv7+FTjombujdLeULfnGEClV6lBZRK6nAtgNxYgfYxD5DnhMMWRGDFsqZUtpY4iUAAt9F0zOoL+2/RxwUcbFwf+S/V5/99L9eRvo7dG1MNFcDHhekbheu2D35Cjwk8i7d8aHO5K1c39Yrvam89365zbqTsQgYMdmQ4ih84Hp6m/rBL3PgFcCzXYOuVST/U8u1gJgGMzTVSVFIC+lfbQLQVzQfboOzHYu8V9ABTBFCaW1K/o2SbLXNPZikd2rSoLIJ8AtEbEYEYZRwGKtoAWvVepfosDoYjXQHvgDeFcJYjF8mwSRj0TkOWC3R9ExpRNm3GntxJfmwTRHAV/IA50W6dZ6AhTDySSP1lOBCxmEBa+39PdSvV0uB4hY3zInllTFIFEPDG0ykQCp13T2C7CdGqPVPaNswALcVqAz8KrG1ah11rcrcr+WCVzV0bS5gjgOvJgoCYeMHY05dm51Z3oqFhhm6CKbsd3k+93WTd9eliwaa++OPfptT97PLcFMyuDIgCgZ24FBwHvyXr+J6GQLbIrGbustopXaxcLRsbSmrzxcRaIBsQEpyizbfsUZI1buFBX6BVobfXvazj3QSb/L00xR8sWSRuAZ5zybIzgvLzdYhv4daENFaDmwXZ6tEFueTStpjJPGVxd7toaMsTsShvvVmUTT+DgAdniMuiUvVe3sRrX6wryTYVtaRsZ56h7Cj1rtane1MvX5cDiVp27M4oPFAR/+leEVarXq8+GHVIoPMctBlrr78Ke5VEe2r/p8OJdKOShmge4rj1G/2LvF85a55BnzaeoFuoiSqUX4IOrCCgnOmApVIgu4IVc8KvWSaUQR24LgOr3BPwCGN2CuMaq2DFZm3XxF7DSgDOBms/5bIQ3IO+5RcbskFSUZMmTIkCFDLhr3AIISfW5oqEaSAAAAAElFTkSuQmCC'
            alt='Logo de la partie réalisation'
          />
          <p>Voir mes réalisations</p>
        </SitesLink>
        <SitesLink id='contact-button' onClick={useScrollTo}>
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEf0lEQVR4nO2Ya1MTdxTG+Qx9q36fOv0OAjZ4QWkQsV5BK4IL5IZKBLQtlWBFWhHl9qIz9mLr+85UCzHkHgIkEnLd4JTTObv/kE12z14SOvTFnpnnDTOQ3/PkOWd3aGgwxxxzzDFnv8axyH/mWuIjriUejMixUNh1LuaXHQv5xoaDHOcSHzYC7lxEFdCAIPt8HuzzuRsHZsClB5xBOxm0Y56Bz+XBhnqZg4EXOe5/Z8CpmDaDnsvD4MucoIEXqCxws1mH/WnqkwM34MS0q8ElaQvgAnQOBmaz0I96ngXueQa4mQzcRj1LQx/qxzT0on7Yhluo6W3omU5Bz9MU3ERNbcFXqCdbcON71Ae4/lhU92QSuiaT4S5P8qimAaNpC9CzCC2CC9AzGRH6mRL0tgQ6VYYWwD/AdQbeXQaHLk8SrnkScO3RZog0oA6eqwQn087oTFsNPCmCexj4RELQ1UeoTSANUEtZrkm2vppMsZo8oWvSvQeekIFf+U4UaUBfTTLlmqimXUdNJhJwdaIS+vI4agMufbtBG9irCbGUg7MZeLNShExhV9Cb5SJwMwZroph2kkwboUvgqIvfrNMGtJYSgavnj795jbS3dKadgCsM/DIDvzRehkZ9+bUo0kBFTRSWElOvHvyZ4ZqQaW/K0i6Dx+HCQ1GkAa2lTCsYSOf/0bmUxmpysRr8QRw6H6xB59gabUDrdv/+jpcZ+O1twcBSSmqimvb6XtqdDPz8mKiO0RhtQOt2906n4PU7Xkgd9fptAW5Oaacd3NgBo7O6tiMD7xiJwbkRFQP/1e0OrNdioAjnRyvBz92PQvv9KG2g7tttaCnVa9IxyqBHYgI0yuqOgnU4QhvQut2Pf8mAf/0jFD/uClqN74DnVbq2pSyBjzFwIu12dxn8C9Q9FQNqt/vXvwrk1/3qz1z5ditA11IhX6wIVjeDHo5A2z1UGM7eDdMGqJpM/pzR/MDxn1Jk2v64cQPvY0UhbYRuuyuCn70ThjN3QrQB6proAcAP3AN/KL/dRmvSVgEeEsDPDIWgdUjFAHW7se9aw+/s1raUbil0RJZ2CbrVFYTTKGeQNkA9KfVOBbgkbX9c/g6l+Y1GeRn4KWcATjkCtAHqmugdKbg0bd+acQPeCM+ggwL0SZQ9ACfsftoAdbv1jqwmmt0OkzVRAj9h80OLTcUAdQb1Tq1L2SoFd4g1QWgB3MbAB1GrYBlYpQ1QT0p8L9F3t6Py211n2i2DfrAw8M9R/T7agOKTkromutNWAw8og0vSFsD7RfDjnCjSgPHbHdFXExcDdyrVxK9YExHcVwHefPu9INJAbbe7/qVsQeiqmlRDN/WJauz10gb260mpWBOVpbSopC2CewXwkkgDqmlXvVCh9mspjzPwZo5BM3AptC4D7e5oWNdSDoXmTtpDh9qGwodbXcEFzaW0KS9lM+ebO3Zr+ZCFWznc1OddUEq7Wsd6V+h/LVrdsaPW4UhYqyYIXvqd07bIkVqX0sKt7P2dph7vETXwEnxjn/dT0oA55phjjjkNBudf29VI4PhB+eYAAAAASUVORK5CYII='
            alt='Logo de la partie contact'
          />
          <p>Me contacter</p>
        </SitesLink>
      </StyledContainer>
    </span>
  )
}
