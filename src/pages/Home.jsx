import React from 'react';
import productsContents from '../productsContent'
import Box from '@mui/material/Box';
// import FilterCategories from '../components/FilterCategories';
// import SearchIcon from '@mui/icons-material/Search';
import ItemCard from '../components/ItemCard';

const Home = () => {
    console.log(productsContents)
  return (
    <>
    <Box sx={{display:"flex"}}> 
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* <h2 className='main-intro-text works-text jobs-text'>JOBS</h2> */}
      <div className="job-detail-header-div">
        <h2 className='jobs-text job-detail-heading'>Select Your Item</h2>
      </div>


      {/* <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search jobs..."
          />
          
            <SearchIcon className="search-icon"/>
          
        </div>


      <FilterCategories onFilter={handleFilter} /> */}
        <div className='jobcard-container' style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center',gap:'50px'}}>
                  {productsContents.map(contents => (
                      <ItemCard
                        key={contents.price}
                        image={contents.img_src}
                        job_title={contents.Title}
                        company={contents.Handle}
                        view={contents.tag1}
                        share={contents.tag2}
                        tags = {contents.Color}
                        job_type = {contents.job_type}
                        work_type = "work_type_job"
                        // onSaveCard={handleSaveCard} 
                        style={{ flex: '1 10 50%', maxWidth: '50%'  }}
                    />
                ))}
            </div>
    </Box>
    </Box>
    </>
  )
}

export default Home