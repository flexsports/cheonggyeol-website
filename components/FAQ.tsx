'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ title, children, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className='border-b border-gray-200'>
            <button
                className='flex items-center justify-between w-full py-4 md:py-5 text-left transition-colors hover:text-sky-600'
                onClick={onClick}
            >
                <span className={`text-base md:text-lg font-medium pr-4 ${isOpen ? 'text-sky-600' : 'text-gray-900'}`}>
                    {title}
                </span>
                {isOpen ? (
                    <ChevronUp className='w-5 h-5 text-sky-600 shrink-0' />
                ) : (
                    <ChevronDown className='w-5 h-5 text-gray-400 shrink-0' />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4 md:mb-5' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className='text-gray-600 leading-relaxed text-sm md:text-base'>{children}</div>
            </div>
        </div>
    );
};

export default function FAQ() {
    const [openSection, setOpenSection] = useState<string | null>('time');

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <section className='py-12 md:py-16 lg:py-24 bg-white'>
            <div className='container px-4 mx-auto max-w-3xl'>
                <h2 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900'>자주 묻는 질문</h2>
                <div className='space-y-0'>
                    <AccordionItem
                        title='청소 시간은 얼마나 걸리나요?'
                        isOpen={openSection === 'time'}
                        onClick={() => toggleSection('time')}
                    >
                        평균적으로 30평대 기준 4~5시간 정도 소요됩니다. 하지만 오염도에 따라 시간은 유동적이며,
                        시간에 구애받지 않고 저희 기준에 충족할 때까지 청소를 진행합니다.
                    </AccordionItem>
                    <AccordionItem
                        title='예약금과 잔금 결제는 어떻게 하나요?'
                        isOpen={openSection === 'payment'}
                        onClick={() => toggleSection('payment')}
                    >
                        예약 확정을 위해 소정의 예약금을 받고 있으며, 잔금은 청소 서비스가 모두 완료되고
                        고객님의 검수(컨펌)를 마친 후 후불로 결제해주시면 됩니다. 카드 결제 및 현금 영수증
                        발행도 가능합니다.
                    </AccordionItem>
                    <AccordionItem
                        title='A/S 규정이 궁금합니다.'
                        isOpen={openSection === 'as'}
                        onClick={() => toggleSection('as')}
                    >
                        청소 완료 후 고객님과 함께 현장 검수를 진행합니다. 미흡한 부분이 발견되면 즉시
                        수정해드리며, 당일 검수 후 혹시 발견하지 못한 부분이 있더라도 시공일 포함 8일 이내에
                        연락 주시면 AS 처리해드립니다.
                    </AccordionItem>
                </div>
            </div>
        </section>
    );
}
