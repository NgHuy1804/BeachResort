import React from "react";
// import react-router-dom
import Banner from "../Components/Banner/Banner";
// imports components
import Hero from "../Components/Hero/Hero";
import './about.css';
const About = () => {
    
    const teamMembers = [
      {
        name: "Nguyễn Văn Sáng ",
        role: "Group leader",
        
        email: "SangNVCE171782@fpt.edu.vn",
      },
      {
        name: "Nguyễn Thị Hồng Khánh",
        role: "UI/UX Designer",
        
        email: "abc@gmail.com",
      },
      {
        name: "Nguyễn Văn A",
        role: "BA",
        
        email: "bcd@gmail.com",
      },
    ];
    return (
        <>
            <Hero>
                <Banner
                    title="Welcome to Beach Resort"
                    subtitle="The Beach Resort is situated in a prime location, just a few steps away from the beach. You can immerse yourself in the crystal-clear seawater or relax on the silky-smooth sandy shore, where the sea and infinity pool blend seamlessly, creating a unique resort experience. Our luxurious amenities include exquisite restaurants, a tranquil spa, and an outdoor bar. Each guest room offers a view of the ocean, allowing you to unwind and savor the natural surroundings. Our infinity pool evokes the sensation of swimming in the vast open sea."
                >
                </Banner>
            </Hero>
            <div className="team">
                <div className="container">
                    <h2>Meet Our Team</h2>
                    <div className="team-members">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="member">
                                <h3>{member.name}</h3>
                                <p><strong>Role:</strong> {member.role}</p>
                                <p>{member.bio}</p>
                                <p>Contact: <a href={`mailto:${member.email}`}>{member.email}</a></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}


export default About;
