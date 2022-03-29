class Dashboard {
  
  static setAfterHeight () {
    const dashboardHeight = document.querySelector('.main').scrollHeight;
  
    if(window.innerWidth <= 992) {

      const aside = document.querySelector('.aside');  
      document.body.insertAdjacentHTML("beforebegin", `
      <style>
        .aside:hover + .main::after,
        .aside.active + .main::after {
          height: ${dashboardHeight}px;
        }
      </style>
      `);
    }
  }

  static sideMenuToggle () {
    const navBars = document.querySelector('.main header .bars');

    navBars.onclick = () => {
      document.querySelector('.aside').classList.add('active');
    }

    document.body.onclick = (e) => {
      const aside = document.querySelector('.aside');

      const isNavbar = (e.target == navBars) || navBars.contains(e.target);
      const isNotAside = !aside.contains(e.target);

      if (isNavbar) {
        aside.classList.add('active');
      }
      else if (isNotAside) {
        aside.classList.remove('active');
      }

    };
  }
}


Dashboard.setAfterHeight();
window.onresize = Dashboard.setAfterHeight;

Dashboard.sideMenuToggle();