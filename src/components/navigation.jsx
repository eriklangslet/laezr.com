export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-bs-toggle='collapse'
            data-bs-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src='img/logo.jpg' className='img-responsive' alt='' />{' '}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li className='nav-item nav-link'>
              <a href='#features' className='nav-link'>
                Features
              </a>
            </li> */}
            <li className='nav-item'>
              <a href='#about' className='nav-link'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href='#services' className='nav-link'>
                Services
              </a>
            </li>
            {/* <li className='nav-item'>
              <a href='#portfolio' className='nav-link'>
                Gallery
              </a>
            </li>
            <li className='nav-item'>
              <a href='#testimonials' className='nav-link'>
                Testimonials
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
