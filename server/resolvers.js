const db = require('./db')

const Query = {
    jobs: () => db.jobs.list()
}

const Job = {
    company: (job) => db.companies.get(job.companyId)
};

const Company = {
    animal: (company) => db.animals.get(company.animalId)
}


module.exports = { Query, Job, Company };