import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _vOpKDO2LDDOu2mf8PAkOmhnL1CdrFAeiPMFNP0pOpXTYgCVJtXbEvkQ69Zb0j2ebCxRkFwCgP0w5DnCNRQfstDKGd9FPudV0wEBw1R_nQR8UAfl3QP_PPUw940eYHYx'
    }
})