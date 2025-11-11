
import './App.css'
import FontWeights from './FontWeight.jsx';
import TextAlignment from './TextAlignment.jsx';
import TextColors from './TextColor.jsx';
import TextStyles from './TextDecoration&Transform.jsx';
import TextSpacing from './LineHeight&LetterSpacing.jsx';
import BackgroundColors from './BackgroundColors.jsx';
import NigerianFlag from './NigeriaFlag.jsx';
import ColorOpacity from './Opacity.jsx';
import PaddingExamples from './Padding.jsx';
import MarginExamples from './Margin.jsx';
import SpaceBetween from './SpaceBetween.jsx';
import BorderWidth from './BorderWidth.jsx';
import BorderColors from './BorderColor.jsx';
import BorderRadius from './BorderRadius.jsx';
function App() {


  return (
      <>
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <h1 className="text-4xl font-bold text-naija-green">
          Hello Tailwind CSS!
        </h1>
        </div>
        <div className='p-8'>
          <p className='text-xs'>Extra Small Text</p>
          <p className='text-sm'>Small Text</p>
          <p className='text-base'> Base Text</p>
          <p className='text-lg'> Large Text</p>
          <p className='text-xl'> Extra Large Text</p>
          <p className='text-2xl'> 2XL Text</p>
          <p className='text-3xl'> 3XL Text</p>
          <p className='text-4xl'> 4XL Text</p>
          <p className='text-5xl'> 5XL Text</p>
          <p className='text-6xl'> 6XL Text</p>

        </div>
        <div>
          <FontWeights/>
          <TextAlignment/>
          <TextColors/>
          <TextStyles/>
          <TextSpacing/>
          <BackgroundColors/>
          <NigerianFlag/>
          <ColorOpacity/>
          <PaddingExamples/>
          <MarginExamples/>
          <SpaceBetween/>
          <BorderWidth/>
          <BorderColors/>
          <BorderRadius/>

        </div>
      </>
      
  );
}

export default App;
