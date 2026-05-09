// --- 1. HEALTH logic ---
exports.getHealth = (req, res) => {
    res.json({ 
        status: 'healthy', 
        date: new Date().toLocaleString() 
    });
};

// --- 2. WEATHER logic (WE WILL DO THIS TOGETHER) ---
exports.getWeatherByZip = async (req, res) => {
    // We will build this fetch logic together in class!
    // const { zip } = req.params;
    res.json({ message: "Weather logic coming soon from our code-along!" });
};

// --- 3. AUTH PLACEHOLDERS (Future Units) ---
/*
exports.registerUser = async (req, res) => {
    // This is where we will hash passwords later!
};

exports.loginUser = async (req, res) => {
    // This is where we will check credentials!
};
*/