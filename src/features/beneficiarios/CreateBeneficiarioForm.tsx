"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { formSchema, BeneficiarioFormData } from "./schemas";
import { cn } from "@/lib/utils"; // Importante para juntar classes

const STEPS = [
  { id: 1, label: "Dados Pessoais", fields: ["nome", "sobrenome", "cpf"] },
  {
    id: 2,
    label: "Localização",
    fields: ["telefone", "endereco", "cidade", "estado", "cep"],
  },
  {
    id: 3,
    label: "Vínculo",
    fields: ["associacao", "tecnicoResponsavel", "status"],
  },
];

export function CreateBeneficiarioForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStep = Number(searchParams.get("etapa")) || 1;

  const form = useForm<BeneficiarioFormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      estado: "PE",
      status: "Ativo", // Agora enviando string para bater com o schema corrigido
    },
  });

  const nextStep = async () => {
    const stepConfig = STEPS.find((s) => s.id === currentStep);
    const isValid = await form.trigger(stepConfig?.fields as any);
    if (isValid) {
      router.push(`?etapa=${currentStep + 1}`);
    }
  };

  const prevStep = () => {
    router.back();
  };

  const onSubmit = (data: BeneficiarioFormData) => {
    console.log("DADOS FINAIS:", data);
    alert("Beneficiário cadastrado com sucesso!");
    router.push("/beneficiarios");
  };

  return (
    <Card className="w-full max-w-[600px] mx-auto border-none shadow-md mt-6 h-[680px] relative flex flex-col">
      <CardHeader className="pt-[40px] px-[60px]">
        <Button
          variant="ghost"
          size="icon"
          asChild
          onClick={prevStep}
          className="hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="cursor-pointer p-2 text-ecosy-blue" />
        </Button>

        <CardTitle className="text-2xl font-heading font-bold text-[#16424A]">
          Cadastro de Novo Beneficiário
        </CardTitle>
        <CardDescription>Passo {currentStep} de 3</CardDescription>
      </CardHeader>

      <CardContent className="py-[20px] px-[60px] pb-[60px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* ETAPA 1: DADOS PESSOAIS */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Maria Lúcia" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sobrenome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: dos Santos" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input placeholder="000.000.000-00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* ETAPA 2: LOCALIZAÇÃO */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="(87) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="cep"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CEP</FormLabel>
                          <FormControl>
                            <Input placeholder="00000-000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="cidade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cidade</FormLabel>
                          <FormControl>
                            <Input placeholder="Garanhuns" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="endereco"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input placeholder="Sítio Laranjeiras..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* ETAPA 3: VÍNCULO */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <FormField
                  control={form.control}
                  name="associacao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Associação</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da associação..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tecnicoResponsavel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Técnico Responsável</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          {/* Aplicando estilo no Trigger do Select */}
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="jonas">Jonas Pereira</SelectItem>
                          <SelectItem value="carla">Carla Medeiros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status Inicial</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Ativo">Ativo</SelectItem>
                          <SelectItem value="Pendente">Pendente</SelectItem>
                          <SelectItem value="Inativo">Inativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* --- RODAPÉ DE NAVEGAÇÃO --- */}
            <div className="absolute bottom-[40px] left-[60px] right-[60px] flex justify-between pt-6 mt-8 gap-4">
              {currentStep < 3 ? (
                <Button
                  variant="greenCustom"
                  type="button"
                  onClick={nextStep}
                  className="w-full hover:bg-[#407554]"
                >
                  Próximo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="greenCustom"
                  type="submit"
                  className="w-full hover:bg-[#407554]"
                >
                  Salvar
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
