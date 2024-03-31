import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
//: DATA (Constants file) 
import { transformationTypes } from '@/constants';


const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  //: Take and Use data needed
  const transformation = transformationTypes[type];
  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <TransformationForm />
    </>
  )
}

export default AddTransformationTypePage;