class HexContact extends HTMLElement {
  constructor(){
    super();
    const copyButton = this.querySelector('button');
    const href = this.dataset.href as string;
    copyButton?.addEventListener('click', async (e) => {
      try{
        await navigator.clipboard.writeText(href);
      } catch(err){
        console.error('unable to copy to clipboard:', err)
      }
    })
  }
}
export default HexContact;
customElements.define('hex-contact', HexContact);
