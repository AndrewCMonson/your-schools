import PageTitle from '../components/PageTitle'
import { Input, Button } from '@material-tailwind/react'
import Skeleton from '../components/Skeleton'

const LoadingScreen = () => {
  return (
    <div id="schoolsScreen" className="flex flex-col items-center overflow-auto w-100 pt-5">
				<PageTitle title="Schools" />
				<form
					className="container mx-auto relative flex w-full max-w-[24rem]"
					label="Search"
				>
					<Input
						type="text"
						name="zipcode"
						label="Zipcode"
						className="pr-20"
						maxLength={5}
						containerProps={{ className: 'min-w-0' }}
					/>
					<Button
						type="submit"
						size="sm"
						color="blue"
						className="!absolute right-1 top-1 rounded"
						label="Search"
					>
						Search
					</Button>
				</form>
				<div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
			</div>
  )
}
export default LoadingScreen