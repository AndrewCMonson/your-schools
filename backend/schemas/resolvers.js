import { School, User } from '../models/index.js';

const resolvers = {
    Query: {
        schools: async (parent, args) => {
            const schools = await School.find({ zipcode: args.zipcode});
            return schools;
        },
        school: async (parent, { id }) => {
            const school = await School.findById(id);
            return school;
        },
    },
    }

export default resolvers;