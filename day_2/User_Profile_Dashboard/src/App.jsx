import ProfileCard from './ProfileCard'
import ProfileHeader from './ProfileHeader'
import ProfileStats from './ProfileStats'
import SkillBadge from './SkillBadge'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <ProfileCard>
        <ProfileHeader
          avatar="https://images.unsplash.com/photo-1644152993066-9b9ee687930d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=387"
          name="Ololade Abegunde"
          title="Data Management Specialist at Royal Technology"
        />
        <ProfileStats
          projects={23}
          followers="7k"
          following={500}
        />
        <SkillBadge
          skill="SQL"
          level="Intermediate"
        />
      </ProfileCard>

      <ProfileCard>
        <ProfileHeader
          avatar="https://images.unsplash.com/photo-1684337399050-0412ebed8005?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=499"
          name="Timmy James"
          title="Data Analyst at Royal Technology"
        />
        <ProfileStats
          projects={60}
          followers="10k"
          following={500}
        />
        <SkillBadge
          skill="Power BI"
          level="Expert"
        />
      </ProfileCard>

      <ProfileCard>
        <ProfileHeader
          avatar="https://images.unsplash.com/photo-1746116572199-f4cde00db1da?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=464"
          name="Bello Mariam"
          title="Data Science Specialist at Royal Technology"
        />
        <ProfileStats
          projects={15}
          followers="3.5k"
          following={350}
        />
        <SkillBadge
          skill="Python"
          level="Beginner"
        />
      </ProfileCard>
    </div>
  );
}

export default App;
