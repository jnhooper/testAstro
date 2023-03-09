class HexContact extends HTMLElement {
  constructor(){
    super();

    const hexParent = this.closest('li')
    const ogColorVarName = '--outlineColor';
    const ogColor = hexParent ? hexParent.style.getPropertyValue(ogColorVarName) : ''
    
    const copyButton = this.querySelector('button');
    // because of some dumb bug in chrome this needs to have a div wrapped around it
    const buttonWrapper = this.querySelector('.copy');
    const href = this.dataset.href as string;
    const copyToCLipboard:EventListener = async (e) =>{
      e.stopPropagation();
      try{
        await navigator.clipboard.writeText(href);
      } catch(err){
        console.error('unable to copy to clipboard:', err)
      }
    }
    
    const setParentCSSValue: EventListener = () => {
      if(hexParent){
        hexParent.style.setProperty(ogColorVarName, 'red');
      }
    }

    const resetParentCSSValue: EventListener = () => {
      if(hexParent){
        hexParent.style.setProperty(ogColorVarName, ogColor);
      }
    }
    copyButton?.addEventListener('click', copyToCLipboard)
    buttonWrapper?.addEventListener('click', copyToCLipboard)
    copyButton?.addEventListener('focus', setParentCSSValue)
    copyButton?.addEventListener('blur', resetParentCSSValue)
    buttonWrapper?.addEventListener('mouseenter', setParentCSSValue)
    buttonWrapper?.addEventListener('mouseleave', resetParentCSSValue)

  }
}
export default HexContact;
