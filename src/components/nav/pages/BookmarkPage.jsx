import SavedAttractionsSection from "./ChildPage/SavedAttractionsSection";
import SavedFoodSection from "./ChildPage/SavedFoodSection"

const COLORS = {
  primary: '#c60c30',    // HK flag red
  background: '#f2f2f2', // light neutral
  formBg: '#ffffff',     // white for form
  buttonText: '#ffffff'
};

export default function BookmarkPage() {
  return (
    <div style={{ backgroundColor: COLORS.background, minHeight: '100vh', padding: '2rem' }}>
      <SavedAttractionsSection />
      <br/>
      <SavedFoodSection />
    </div>
    
  );
}