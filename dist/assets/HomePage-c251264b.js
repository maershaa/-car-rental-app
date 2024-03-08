import{u as c,j as t,r as l,a as g,b as n,f as h,L as b}from"./index-d7f9beac.js";import{s as f,a as u,b as w}from"./cars.selectors-7fbfb125.js";const k=c.li`
  margin-bottom: 40px;
  border-radius: 8px;
  max-width: 274px;
  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 60px);
  }

  .custom-image {
    display: block;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 14px;
    width: 274px;
    height: 268px;
  }

  .carDetails {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .details {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .model {
    font-weight: bold;
    color: #3470ff;
  }

  .cost {
    margin: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: var(--primary-text-color);
  }

  .additionalInfo {
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.5);
    max-width: 270px;
    max-height: 40px;
    overflow: hidden;
    word-spacing: 2px;

    margin-bottom: 28px;
  }

  .LearnMoreLink {
    cursor: pointer;

    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    color: #fff;
    text-align: center;

    background: #3470ff;
    border-radius: 12px;
    padding: 12px 99px;
    width: 274px;
    height: 44px;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    .seeMoreLink {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`,_=r=>{if(r){const a=r.split(", "),[i,s]=a.slice(-2);return`${i} | ${s}`}return null},y=({id:r,img:a,brand:i,model:s,year:e,cost:o,functionalities:d,rentalCompany:p,address:x,type:m})=>t.jsxs(k,{children:[t.jsx("img",{src:a,alt:`${i} ${s}`,className:"custom-image"}),t.jsxs("div",{className:"carDetails",children:[t.jsxs("p",{className:"details",children:[i," ",t.jsxs("span",{className:"model",children:[s,","]})," ",e]}),t.jsx("p",{className:"cost",children:o})]}),t.jsxs("p",{className:"additionalInfo",children:[_(x)," | ",p," | ",m," | ",s," | ",r," |"," ",d[0]]}),t.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"LearnMoreLink",children:"Learn More"})]}),v=c.div`
    .carsList {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (min-width: 768px) {
      gap: 20px;
    }

    @media (min-width: 1280px) {
      gap: 40px;
    }
  }
`,L=({cars:r})=>{const[a,i]=l.useState(4);l.useEffect(()=>{const e=()=>{const o=window.innerWidth;o>=1280?i(4):o>=768?i(2):i(1)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]);const s=r.slice(0,a*3);return t.jsx(v,{children:t.jsx("ul",{className:"carsList",children:s.map(e=>t.jsx(y,{id:e.id,className:"carsListItem",img:e.img,brand:e.make,model:e.model,year:e.year,cost:e.rentalPrice,functionalities:e.functionalities,rentalCompany:e.rentalCompany,address:e.address,type:e.type},e.id))})})},j="/car-rental-app/assets/left_blur_desktop-d4c6c43c.svg",z="/car-rental-app/assets/right_blur_desktop-fd0baab0.svg",C="/car-rental-app/assets/center_blur_desktop-df6d6ec0.svg",N="/car-rental-app/assets/left_blur_tablet-521345fe.svg",E="/car-rental-app/assets/right_blur_tablet-25d28852.svg",D="/car-rental-app/assets/left_blur_mobile-c5ff6af9.svg",I="/car-rental-app/assets/right_blur_mobile-b7131396.svg",S={left_blur_desktop:j,right_blur_desktop:z,center_blur_desktop:C,left_blur_tablet:N,right_blur_tablet:E,left_blur_mobile:D,right_blur_mobile:I},$=c.div`

    background-image: url(${S.center_blur_desktop});
    background-size: 549px 543px;
    background-repeat: no-repeat;
    background-position: top 343px right;
    background-clip: content-box;
  
  .categoryListsContainer {
    margin-bottom: 60px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .otherDrinksLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 167px;
    height: 46px;
    background: var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--link-text);

    margin-left: auto;
    margin-right: auto;

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    @media (min-width: 768px) {
      padding: 18px 44px;
      width: 187px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;

      margin-bottom: 60px;
    }
  }

  .otherDrinksLink:hover,
  .otherDrinksLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var(--link-bg-hover);
  }
`,H=()=>{const r=g(),a=n(f),i=n(u),s=n(w);return l.useEffect(()=>{a||r(h())},[a,r]),t.jsxs($,{className:"container",children:[i&&t.jsx(b,{}),s&&t.jsxs("p",{children:["Error: ",s]}),t.jsx(L,{cars:a})]})};export{H as default};
