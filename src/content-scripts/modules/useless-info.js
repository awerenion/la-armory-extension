export function removeUselessInfo() {
    document.querySelector('.profile-ability-tendency').remove();
    document.querySelector('#profile-equipment').style.setProperty('height', '720px', 'important');
    document.querySelector('.profile-arkpassive__point').style.setProperty('bottom', 'auto', 'important');
    document.querySelector('.profile-arkpassive__point').style.setProperty('top', '30px', 'important');
}