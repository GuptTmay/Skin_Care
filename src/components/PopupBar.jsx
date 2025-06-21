// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { plus, minus } from '../assets/IconsSvg';

const PopupBar = ({ index, ques, ans, openPanel, setOpenPanel }) => {
  return (
    <div className="w-full border-2 border-primary rounded-xl">
      <div
        onClick={() => setOpenPanel(openPanel === index ? null : index)}
        className="text-primary flex w-full rounded-xl cursor-pointer items-center justify-between bg-[#FEFFF4] px-4 py-3 sm:px-6 sm:py-4 text-base font-medium sm:text-[20px]"
      >
        <h2>{ ques }</h2>
        <div className="ml-4 flex-shrink-0">
          {openPanel === index ? <span>{minus}</span> : <span>{plus}</span>}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {openPanel === index && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-secondary bg-[#FEFFF4] sm:text-[14px] text-[12px] tracking-[-5%] rounded-b-xl px-4 pb-3 sm:px-6 sm:pb-4 font-normal"
          >
            <p
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: ans }}
            ></p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopupBar;
