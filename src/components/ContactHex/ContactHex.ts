class HexContact extends HTMLElement {
  constructor(){
    console.log('hello')
    super();
    const copyButton = this.querySelector('button');
    // because of some dumb bug in chrome this needs to have a div wrapped around it
    const buttonWrapper = this.querySelector('.copy');
    const href = this.dataset.href as string;
    const copyToCLipboard:EventListener = async (e) =>{
      e.stopPropagation();
      try{
        await navigator.clipboard.writeText(href);
        console.log('copied');
      } catch(err){
        console.error('unable to copy to clipboard:', err)
      }
    }
    copyButton?.addEventListener('click', copyToCLipboard)
    buttonWrapper?.addEventListener('click', copyToCLipboard)
  }
}
export default HexContact;
