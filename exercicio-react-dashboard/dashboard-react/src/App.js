import './App.css';
import './assets/css/app.css'
import product_dummy from './assets/images/product_dummy.svg'
import dummy_avatar from './assets/images/dummy-avatar.jpg'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/navbar';
import CardRow from './components/cardRow/cartRow';
import CardDatabaseLastProduct from './components/CardDatabaseLastProduct/cardDatabaseProduct';
import CardCategoriesInDB from './components/CardCategoriesInDB/cardCategoriesInDB';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar />
        {/* <!-- End of Sidebar -->

        <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            {/* <!-- Topbar --> */}

            <Navbar
              avatar={dummy_avatar}
            />
            {/* <!-- End of Topbar -->

            <!-- Begin Page Content --> */}
            <div class="container-fluid">

              {/* <!-- Page Heading --> */}
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              {/* <!-- Content Row --> */}
              <div class="row">

                {/* <!-- Amount of Products in DB --> */}

                <CardRow
                  borderLeft={"card border-left-primary shadow h-100 py-2"}
                  color={"text-xs font-weight-bold text-primary text-uppercase mb-1"}
                  icon={"fas fa-clipboard-list fa-2x text-gray-300"}
                  content={"Products in Data Base"}
                  value={"135"}
                />

                {/* <!-- $$$ of all products in DB --> */}

                <CardRow
                  borderLeft={"card border-left-success shadow h-100 py-2"}
                  color={"text-xs font-weight-bold text-success text-uppercase mb-1"}
                  icon={"fas fa-dollar-sign fa-2x text-gray-300"}
                  content={"Amount in products"}
                  value={"$546.456"}
                />

                {/* <!-- Amount of users in DB --> */}

                <CardRow
                  borderLeft={"card border-left-warning shadow h-100 py-2"}
                  color={"text-xs font-weight-bold text-warning text-uppercase mb-1"}
                  icon={"fas fa-user-check fa-2x text-gray-300"}
                  content={"Users quantity"}
                  value={"38"}
                />
              </div>


              {/* <!-- Content Row --> */}
              <div class="row">
                {/* <!-- Last Product in DB --> */}

                <CardDatabaseLastProduct 
                  image = {product_dummy}
                  content = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?"}
                  linkContent = {"View product detail"}
                />

                {/* <!-- Categories in DB --> */}
                
                <CardCategoriesInDB /> 
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

      </div>
    </div>
  );
}

export default App;
