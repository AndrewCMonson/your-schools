import School from "../models/School.js";

// @desc    Fetch all schools
// @route   GET /api/schools
// @access  Public
const getSchools = async (req, res) => {
    const { zipcode } = req.query;

    try {
        const schools = await School.find({ zipcode: zipcode });

        if (schools.length === 0) {
            return res.status(404).json({ message: "No schools found" });
        }
        res.json(schools);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};


// @desc    Fetch single school
// @route   GET /api/schools/:id
// @access  Public
const getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);

    if (!school) {
      return res.status(404).json({ message: "School not found" });
    } else {
      res.json(school);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getSchools, getSchoolById };