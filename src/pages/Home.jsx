import React,{useState} from 'react';
import productsContents from '../productsContent'
import Box from '@mui/material/Box';
// import FilterCategories from '../components/FilterCategories';
import SearchIcon from '@mui/icons-material/Search';
import ItemCard from '../components/ItemCard';

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(productsContents);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    const filtered = productsContents.filter((job) => {
      const titleMatch = job.tag1 && job.tag1.toLowerCase().includes(value.toLowerCase());
      const companyMatch = job.tag2 && job.tag2.toLowerCase().includes(value.toLowerCase());
      const locationMatch = job.tag3 && job.tag3.toLowerCase().includes(value.toLowerCase());
      const nameMatch = job.Title && job.Title.toLowerCase().includes(value.toLowerCase());
      return titleMatch || companyMatch || locationMatch || nameMatch;
    });

    setFilteredJobs(filtered);
  };
  return (
    <>
    <Box sx={{display:"flex"}}> 
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      {/* <h2 className='main-intro-text works-text jobs-text'>JOBS</h2> */}
      <div className="job-detail-header-div">
        <h2 className='jobs-text job-detail-heading'>Select Your Item</h2>
      </div>

      <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search jobs..."
          />
          
            <SearchIcon className="search-icon"/>
          
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
                  {filteredJobs.map(contents => (
                      <ItemCard
                        // key={contents.Price}
                        price={contents.Price}
                        image={contents.img_src}
                        job_title={contents.Title}
                        company={contents.Handle}
                        tag1={contents.tag1}
                        tag2={contents.tag2}
                        tag3={contents.tag3}
                        color = {contents.Color}
                        size = {contents.Size}
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