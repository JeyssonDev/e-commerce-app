import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredProductsThunk } from '../../../redux/actions';
import CategoryFilter from '../FilterDropDown/CategoryFilter';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import PriceFilter from '../FilterDropDown/PriceFilter';

const initialFiltersValue = {
   priceFrom: '',
   priceTo: '',
   categoryId: '',
};

const FiltersSection = () => {
   const dispatch = useDispatch();
   const [filters, setFilters] = useState(initialFiltersValue);

   const handleChangeFilters = (filterValue) => {
      setFilters((prevFilters) => ({
         ...prevFilters,
         ...filterValue,
      }));
      window.scrollTo(0, 0);
   };

   useEffect(() => {
      dispatch(setFilteredProductsThunk(filters));
   }, [dispatch, filters]);

   return (
      <div className='filters'>
         <FilterDropDown header='Price' isShowingContent={true}>
            <PriceFilter handleChangeFilters={handleChangeFilters} />
         </FilterDropDown>
         <FilterDropDown header='Category' isShowingContent={true}>
            <CategoryFilter
               filters={filters}
               handleChangeFilters={handleChangeFilters}
            />
         </FilterDropDown>
      </div>
   );
};

export default FiltersSection;
