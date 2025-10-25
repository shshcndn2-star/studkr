'use client';

import { useState } from 'react';
import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { summarizeContent } from '@/ai/flows/content-summarization-tool';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function ContentSummarySection() {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      toast({
        title: t.summarizer.errorTitle,
        description: t.summarizer.errorDescription,
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeContent({ content });
      setSummary(result.summary);
    } catch (error) {
      console.error('Summarization failed:', error);
      toast({
        title: t.summarizer.failureTitle,
        description: t.summarizer.failureDescription,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="summarizer">
       <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary animate-fade-in-down">{t.summarizer.title}</h2>
        <p className="text-muted-foreground mt-2 animate-fade-in-up [animation-delay:0.2s]">
           {t.summarizer.description}
        </p>
      </div>
      <Card className="max-w-4xl mx-auto animate-fade-in [animation-delay:0.4s]">
        <form onSubmit={handleSubmit}>
          <CardContent className='pt-6'>
            <Textarea
              placeholder={t.summarizer.placeholder}
              className="min-h-[150px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isLoading}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="me-2 h-4 w-4 animate-spin" />
                  {t.summarizer.loading}
                </>
              ) : (
                t.summarizer.buttonText
              )}
            </Button>
          </CardFooter>
        </form>
        {summary && (
          <div className="p-6 pt-0 animate-fade-in">
             <Card className="bg-muted">
                <CardHeader>
                    <CardTitle className="font-headline text-lg">{t.summarizer.summaryTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{summary}</p>
                </CardContent>
             </Card>
          </div>
        )}
      </Card>
    </SectionWrapper>
  );
}
