export const useScrollTo = (id) => {
    const elem = document.querySelector(id);
    const elemRect = elem.getBoundingClientRect();
    const xCoord = 0;
    let yCoord = 0;

    yCoord = elemRect.top + window.scrollY - 60;

    window.scrollTo({ left: xCoord, top: yCoord, behavior: 'smooth' });
};
